import { Fragment, ReactElement, useEffect } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";

export default function StartupList(): ReactElement {
  useEffect(() => {
    StartupHttpService.showData();
  }),
    [];

  return (
    <Fragment>
      <div className="app">
        <div className="items">
          <ul className="ui">
            <div className="listItem">
              <li>
                <h1>BiotecNix</h1>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
