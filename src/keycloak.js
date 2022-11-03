import Keycloak from 'keycloak-js';

const keycloakConfig = {
    'url': process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'https://alpiam.shifteasy.com/',
    'realm': 'alp',
    'clientId': 'alp_client'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
