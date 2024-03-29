import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import config from 'configs/app';

const Batches = dynamic(() => {
  if (config.features.zkEvmRollup.isEnabled) {
    return import('ui/pages/ZkEvmL2TxnBatches');
  }
  return import('ui/pages/L2TxnBatches');
}, { ssr: false });

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/batches">
      <Batches/>
    </PageNextJs>
  );
};

export default Page;

export { rollup as getServerSideProps } from 'nextjs/getServerSideProps';
