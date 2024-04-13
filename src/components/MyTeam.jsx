import React from 'react';
import {users} from '../Configuration';
import TeamCard from "./TeamCard";

const MyTeam = () => {
    return (
        <selection id="teams">
            <main class="main_container">
                <div class="container">
                    <h1 class="card_title">Team</h1>
                    <div class="row row-team">
                        {users.map(user =>
                            <TeamCard user={user} />
                        )}
                    </div>
                </div>
            </main>
        </selection>
    );
};

export default MyTeam;