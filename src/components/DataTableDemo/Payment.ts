import { PaymentStatus } from "./PaymentStatus";

type Payment = {
  id: string;
  amount: number;
  status: PaymentStatus;
  email: string;
  checked: boolean;
};

export { type Payment };
