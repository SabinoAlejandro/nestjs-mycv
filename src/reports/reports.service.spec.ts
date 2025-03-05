import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReportEntity } from './report.entity';
import { Repository } from 'typeorm';

describe('ReportsService', () => {
  let service: ReportsService;
  let repository: Repository<ReportEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        {
          provide: getRepositoryToken(ReportEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
    repository = module.get<Repository<ReportEntity>>(
      getRepositoryToken(ReportEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
