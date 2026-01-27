import { default as React } from 'react';

/**
 * 삭제 확인 모달 Props
 */
export interface DeleteConfirmModalProps {
    /** 삭제할 항목 이름 (표시용) */
    itemName: string;
    /** 모달 제목 (기본: "삭제 확인") */
    title?: string;
    /** 설명 문구 */
    description?: string;
    /** 확인 버튼 클릭 */
    onConfirm: () => void;
    /** 취소 버튼 클릭 */
    onCancel: () => void;
}
/**
 * 삭제 확인 모달 컴포넌트 (React Portal 사용)
 *
 * 삭제 작업 전 사용자 확인을 받는 공용 모달입니다.
 *
 * @example
 * ```tsx
 * {showDeleteConfirm && (
 *   <DeleteConfirmModal
 *     itemName="지하골조공사"
 *     title="공정 삭제"
 *     onConfirm={handleDelete}
 *     onCancel={() => setShowDeleteConfirm(false)}
 *   />
 * )}
 * ```
 */
export declare const DeleteConfirmModal: React.FC<DeleteConfirmModalProps>;
