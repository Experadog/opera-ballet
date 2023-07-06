// import React from 'react';

import cls from "./scenesRepertoire.module.scss";
import { PagesBanner } from "../../components/shared/pagesBanner/PagesBanner";
import { UpcominCard } from "./upcominPerf/UpcominPerf";
import { ShowList } from "../../constants/ShowList";

const ScenesRepertoire = () => {
  return (
    <div className={cls.scenesRepertoire}>
      <PagesBanner title={"ближайшие спектакли"} />
      <div className={cls.container}>
        <div className={cls.scenesRepertoire__cards}>
          {ShowList.map((item) => (
            <UpcominCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScenesRepertoire;
