import { Payment } from "./Payment";
import { PaymentStatus } from "./PaymentStatus";

const status: PaymentStatus[] = ["pending", "processing", "success", "failed"];
const statusLen = status.length;

const payment = (k: number): Payment => {
  const id = (k + 1).toString();
  return {
    id: id,
    amount: 100 + 900 * Math.random(),
    status: status[Math.floor(Math.random() * statusLen)],
    email: `fake-${id}@example.com`,
  };
};

const payments = (tot: number): Payment[] =>
  Array.from({ length: tot }, (_v, k) => payment(k));

export { payments };
