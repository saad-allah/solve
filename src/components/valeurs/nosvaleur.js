
import React from "react";
import TitleNosvaleur from "./nosvaleurs/title";
import Bloc1 from "./nosvaleurs/bloc1";
import Bloc2 from "./nosvaleurs/bloc2";
import Bloc3 from "./nosvaleurs/bloc3";
import Bloc4 from "./nosvaleurs/bloc4";
import LastBloc from "./nosvaleurs/last";

const NosvaleurPage = () => (
<div>
<TitleNosvaleur />
<section>
      <div className="container">
      <Bloc1 />
        <div className="se-space"></div>
    <Bloc2 />
        <div className="se-space"></div>
<Bloc3 />
        <div className="se-space"></div>
<Bloc4 />
        <div className="se-space has30"></div>
<LastBloc />
      </div>
    </section>
</div>
);
export default NosvaleurPage;
