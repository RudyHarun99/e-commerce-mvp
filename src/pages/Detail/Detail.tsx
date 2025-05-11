import React from 'react';
import styles from './Detail.module.scss';
import {
  SectionDetail,
  SectionRelated
} from '@/components';

export const Detail: React.FC = () => {
  return (
    <div className={styles.content}>
      <SectionDetail />
      <SectionRelated />
    </div>
  );
};
