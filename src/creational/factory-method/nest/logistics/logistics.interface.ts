import { Transport } from '../transport/transport.interface';

export interface Logistics {
  createTransport(): Transport;
}
