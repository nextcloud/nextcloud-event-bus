import { Event } from "./Event";

export interface EventHandler {
    (event: Event): void
}
