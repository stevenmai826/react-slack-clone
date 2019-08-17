import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const UserInvite = ({ avatar, username }) => (
    <Card>
        <Image circular src={avatar} />
        <Card.Content>
            <Card.Header as="a">{username}</Card.Header>
        </Card.Content>
    </Card>
);
        
export default UserInvite;