import io from 'socket.io-client';
import {WS, URL} from '../consts';

export const socket = io(WS + URL);
