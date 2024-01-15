export interface AppRequestQueueState {
  numberOfRunningRequests: number;
}

export interface IncrementAppRequestQueueAction {
  type: string;
  payload: Record<string, unknown>;
}

export interface DecrementAppRequestQueueAction {
  type: string;
  payload: Record<string, unknown>;
}
