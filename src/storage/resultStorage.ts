import { storageKeys } from './localStorageKeys';
import type { StoredResult, StoredSession } from '@/domain/totem/types';

function safeParse<T>(value: string | null): T | null {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function canUseStorage(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function loadSession(): StoredSession | null {
  if (!canUseStorage()) {
    return null;
  }

  return safeParse<StoredSession>(window.localStorage.getItem(storageKeys.session));
}

export function saveSession(session: StoredSession): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(storageKeys.session, JSON.stringify(session));
}

export function clearSession(): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(storageKeys.session);
}

export function loadResult(): StoredResult | null {
  if (!canUseStorage()) {
    return null;
  }

  return safeParse<StoredResult>(window.localStorage.getItem(storageKeys.result));
}

export function saveResult(result: StoredResult): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(storageKeys.result, JSON.stringify(result));
}

export function clearResult(): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(storageKeys.result);
}

export function hasStoredResult(): boolean {
  return loadResult() !== null;
}

export function clearAllStorage(): void {
  clearSession();
  clearResult();
}
