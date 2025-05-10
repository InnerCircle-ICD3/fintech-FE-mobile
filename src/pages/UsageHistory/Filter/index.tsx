import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export interface PaymentFilter {
  startDate?: string; // YYYY-MM-DD
  endDate?: string;
  sortBy?: 'date' | 'amount';
}

export const defaultFilter: PaymentFilter = {
  sortBy: 'date',
};

interface Props {
  initialFilter: PaymentFilter;
  onApply: (filter: PaymentFilter) => void;
  onClose: () => void;
}

const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState({
    startDate: '',
    endDate: '',
    sortBy: 'date',
  });

  const handleApply = () => {
    const params = new URLSearchParams();
    if (filter.startDate) params.set('startDate', filter.startDate);
    if (filter.endDate) params.set('endDate', filter.endDate);
    if (filter.sortBy) params.set('sortBy', filter.sortBy);
    navigate(`/history?${params.toString()}`);
  };

  return (
    <div>
      <h2>필터 설정</h2>
      <label>조회 기간</label>
      <input
        type="date"
        value={filter.startDate}
        onChange={(e) => setFilter((f) => ({ ...f, startDate: e.target.value }))}
      />
      ~
      <input
        type="date"
        value={filter.endDate}
        onChange={(e) => setFilter((f) => ({ ...f, endDate: e.target.value }))}
      />
      <label>정렬 기준</label>
      <select
        value={filter.sortBy}
        onChange={(e) => setFilter((f) => ({ ...f, sortBy: e.target.value }))}
      >
        <option value="date">날짜순</option>
        <option value="amount">금액순</option>
      </select>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setFilter({ startDate: '', endDate: '', sortBy: 'date' })}>
          초기화
        </button>
        <button onClick={handleApply}>조회</button>
      </div>
    </div>
  );
};

export default Filter;
