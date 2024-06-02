import { EVENT_ACTIONS } from "src/types/common";
import eventManager from "../index";

function apply_filters<V = any>(hook: string, value: V, ...args: any[]): V {
    const listeners = eventManager.listeners(hook);

    if (listeners.length > 0) {
        listeners.forEach(listener => {
            value = listener(value, ...args);
        });
    }
    return value;
}

function do_action(hook: EVENT_ACTIONS, ...args: any[]): void {
    eventManager.emit(hook, ...args);
}

function apply_action(hook: string, listener: (...args: any[]) => void): void {
    eventManager.on(hook, listener);
}

export { apply_filters, do_action, apply_action };
