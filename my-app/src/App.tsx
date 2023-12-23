import {FC} from 'react';
import {ConfigProvider} from 'antd';

import {Main} from "./pages/Main/Main";

const App: FC = (): JSX.Element => {
    return (
        <div className="App">
            <ConfigProvider>
                <Main/>
            </ConfigProvider>
        </div>
    );
};

export default App;
