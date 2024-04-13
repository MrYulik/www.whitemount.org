import React from 'react';

const TeamCard = ({user, children, ...props}) => {
    return (
        <div>
            <div className="card-team">
                <div className={"card-icon-" + user.id}></div>
                <div className="card-name">{user.username}</div>
                <div className="card-rang">{user.prefix}</div>
            </div>
        </div>
    );
};

export default TeamCard;