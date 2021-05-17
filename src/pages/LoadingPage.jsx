import React from "react";
import { useAuth } from "../contexts/AuthContext";

import SkeletonRenderer from "../components/SkeletonRenderer";
import PageContainer from "../components/PageContainer";
import AnimatedLoadingIcon from "../components/AnimatedLoadingIcon";
export default function LoadingPage(props) {
  const { authStateChecked } = useAuth();
  return (
    <SkeletonRenderer
      skeleton={
        <PageContainer>
          <AnimatedLoadingIcon />
        </PageContainer>
      }
      loadingCondition={authStateChecked}
    >
      {props.children}
    </SkeletonRenderer>
  );
}
