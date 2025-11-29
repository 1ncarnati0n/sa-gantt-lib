import { addDays, isWeekend, format, parseISO, isSameDay } from 'date-fns';
import { CalendarConfig } from '../types';

/**
 * 순작업 종료일 계산 (휴무일 Skip)
 * @param startDate 시작일
 * @param netWorkDays 순작업일수
 * @param calendar 캘린더 설정
 */
export function calculateNetWorkEndDate(
  startDate: Date | string,
  netWorkDays: number,
  calendar: CalendarConfig
): Date {
  let currentDate = typeof startDate === 'string' ? parseISO(startDate) : startDate;
  // 시작일도 작업일에 포함되므로 1일을 뺀 상태에서 시작하거나, 루프 로직을 조정해야 함.
  // 여기서는 "기간"이므로 1일 작업 = 시작일 = 종료일. 즉, 0일을 더해야 함.
  // 따라서 (netWorkDays - 1) 만큼 이동.
  // 단, 중간에 휴일이 있으면 그만큼 더 이동.
  
  let remainingWorkDays = Math.max(0, netWorkDays - 1);
  
  // 만약 시작일 자체가 휴일이라면? -> 시작일은 작업 가능한 첫 날로 가정하거나, 
  // 실제 로직에서는 시작일 자체를 다음 작업 가능일로 미루는 전처리가 필요할 수 있음.
  // 여기서는 시작일은 이미 유효하다고 가정하고 진행.
  
  while (remainingWorkDays > 0) {
    currentDate = addDays(currentDate, 1);
    
    if (isWorkingDay(currentDate, calendar, true)) {
      remainingWorkDays--;
    }
  }
  
  return currentDate;
}

/**
 * 간접작업 종료일 계산 (휴무일 Include, 단 특정 설정에 따라 다를 수 있음)
 * 보통 간접작업(양생 등)은 휴일에도 진행되므로 캘린더 일수를 그대로 더함.
 */
export function calculateIndirectEndDate(
  startDate: Date | string,
  indirectDays: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  calendar: CalendarConfig 
): Date {
  const start = typeof startDate === 'string' ? parseISO(startDate) : startDate;
  // 기간이므로 (days - 1)
  return addDays(start, Math.max(0, indirectDays - 1));
}

/**
 * 두 날짜 사이의 순작업일수 계산
 */
export function calculateWorkingDays(
  startDate: Date | string,
  endDate: Date | string,
  calendar: CalendarConfig
): number {
  let current = typeof startDate === 'string' ? parseISO(startDate) : startDate;
  const end = typeof endDate === 'string' ? parseISO(endDate) : endDate;
  
  let count = 0;
  
  while (current <= end) {
    if (isWorkingDay(current, calendar, true)) {
      count++;
    }
    current = addDays(current, 1);
  }
  
  return count;
}

/**
 * 특정 날짜가 작업 가능한 날인지 확인
 * @param date 확인할 날짜
 * @param calendar 캘린더 설정
 * @param checkNetWork 순작업 여부 (true: 휴일 Skip, false: 휴일 Include)
 */
export function isWorkingDay(
  date: Date,
  calendar: CalendarConfig,
  checkNetWork: boolean
): boolean {
  // 1. 순작업이 아니면(간접작업 등) 기본적으로 모든 날이 작업 가능하다고 봄 (단, 설정에 따라 다름)
  if (!checkNetWork) return true;
  
  const dateStr = format(date, 'yyyy-MM-dd');
  
  // 2. 명시된 비작업일 체크
  const isNonWorking = calendar.nonWorkingDays.some(
    nwd => nwd.date === dateStr && nwd.affectsNetWork
  );
  if (isNonWorking) return false;
  
  // 3. 주말 체크
  if (calendar.weekendPolicy === 'skip' && isWeekend(date)) {
    return false;
  }
  
  return true;
}

/**
 * 날짜 포맷 (YYYY-MM-DD)
 */
export function formatDateString(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

