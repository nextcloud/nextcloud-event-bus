import { Event } from "./Event";
import { EventHandler } from "./EventHandler";

export interface EventBus {

    getVersion(): string;

    subscribe(name: string, handler: EventHandler): void;

    unsubscribe(name: string, handler: EventHandler): void;

    emit(name: string, event: Event): void;

}
