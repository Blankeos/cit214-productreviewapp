import React from "react";

export default function SkeletonRenderer({
  loadingCondition,
  skeleton,
  ...rest
}) {
  return <>{loadingCondition ? rest.children : skeleton}</>;
}
