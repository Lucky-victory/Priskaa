import { EventEmitter } from "events";

class EventManager extends EventEmitter {}

const eventManager = new EventManager();

export default eventManager;
