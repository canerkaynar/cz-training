import React from "react";
import Head from "next/head";
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  return (
    <>
      <Head>
        <title>Serverless-training.sh</title>
      </Head>
      {children}
    </>
  );
};

Page.propTypes = {
  children: PropTypes.object,
};


export default Page;
