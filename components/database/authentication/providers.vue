<template>
    <div>
        <v-expansion-panels variant="accordian" style="overflow-y: scroll; height: 75vh;">
            <v-expansion-panel append-icon="fas fa-envelope" title="Email" text=" "><v-expansion-panel-text><email /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Phone" text=" "><v-expansion-panel-text><phone /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Apple" text=" "><v-expansion-panel-text><apple /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Auth0" text=" "><v-expansion-panel-text><auth0 /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Azure" text=" "><v-expansion-panel-text><azure /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Bitbucket" text=" "><v-expansion-panel-text><bitbucket /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Cas" text=" "><v-expansion-panel-text><cas /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="AWS Cognito" text=" "><v-expansion-panel-text><cognito /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Discord" text=" "><v-expansion-panel-text><discord /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Facebook" text=" "><v-expansion-panel-text><facebook /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Github" text=" "><v-expansion-panel-text><github /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Google" text=" "><v-expansion-panel-text><google /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Instagram" text=" "><v-expansion-panel-text><instagram /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Keycloak" text=" "><v-expansion-panel-text><keycloak /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Linkedin" text=" "><v-expansion-panel-text><linkedin /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Microsoft" text=" "><v-expansion-panel-text><microsoft /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Notion" text=" "><v-expansion-panel-text><notion /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Reddit" text=" "><v-expansion-panel-text><reddit /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Slack" text=" "><v-expansion-panel-text><slack /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Spotify" text=" "><v-expansion-panel-text><spotify /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Twitch" text=" "><v-expansion-panel-text><twitch /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="VK" text=" "><v-expansion-panel-text><vk /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Workos" text=" "><v-expansion-panel-text><workos /></v-expansion-panel-text></v-expansion-panel>
            <v-expansion-panel title="Zoom" text=" "><v-expansion-panel-text><zoom /></v-expansion-panel-text></v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
import email from './providers/email'
import apple from './providers/apple'
import auth0 from './providers/auth0'
import azure from './providers/azure'
import bitbucket from './providers/bitbucket'
import cas from './providers/cas'
import cognito from './providers/cognito'
import discord from './providers/discord'
import facebook from './providers/facebook'
import github from './providers/github'
import google from './providers/google'
import instagram from './providers/instagram'
import keycloak from './providers/keycloak'
import linkedin from './providers/linkedin'
import microsoft from './providers/microsoft'
import notion from './providers/notion'
import phone from './providers/phone'
import reddit from './providers/reddit'
import slack from './providers/slack'
import spotify from './providers/spotify'
import twitch from './providers/twitch'
import twitter from './providers/twitter'
import vk from './providers/vk'
import workos from './providers/workos'
import zoom from './providers/zoom'

    export default {
        components: { email, apple, auth0, azure, bitbucket, cas, cognito, discord, facebook, github, google, instagram, keycloak, linkedin, microsoft, notion, phone, reddit, slack, spotify, twitch, twitter, vk, workos, zoom }
    }
</script>