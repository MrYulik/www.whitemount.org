import React from 'react';
import Main from "../components/Main";
import MyGame from "../components/MyGame";
import MyTeam from "../components/MyTeam";

const MainPage = () => {
    return (
        <div>
            <Main/>
            <MyGame />
            <MyTeam />
        </div>
    );
};

export default MainPage;