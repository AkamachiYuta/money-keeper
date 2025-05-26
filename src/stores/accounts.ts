import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid'; // ID生成のためにuuidをインポート

export interface Account {
  id: string;
  name: string;
}

// 初期口座データ（仮）
const initialAccounts: Account[] = [
  { id: uuidv4(), name: '現金' },
  { id: uuidv4(), name: '銀行A' },
  { id: uuidv4(), name: 'PayPay' },
  { id: uuidv4(), name: 'クレジットカード' },
];

// 口座情報を管理するwritableストア
export const accounts = writable<Account[]>(initialAccounts);

// 将来的には、口座の追加・削除・編集機能もここに追加できます