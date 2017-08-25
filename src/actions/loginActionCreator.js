import { LOGIN_STATUS_CHANGED } from "./_allActions";

export const loginStatusChanged = (nextStatus) => ({
    "type": LOGIN_STATUS_CHANGED,
    nextStatus,
    "someNumber": Math.random()
});
