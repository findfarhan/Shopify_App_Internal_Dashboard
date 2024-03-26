import { Injectable } from '@nestjs/common';
import { Dashboard } from './dashboard.entity';

@Injectable()
export class DashboardService {
  async list() {
    return await Dashboard.findAll();
  }
}
