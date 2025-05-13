import React from 'react';
import styles from './Detail.module.scss';
import { useGetProductDetail } from '@/hooks';
import {
  SectionDetail,
  SectionRelated
} from '@/components';

export const Detail: React.FC = () => {
  useGetProductDetail();
  return (
    <div className={styles.content}>
      <SectionDetail />
      <SectionRelated viewDetail={true}/>
    </div>
  );
};
