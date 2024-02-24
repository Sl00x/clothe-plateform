import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "./entities/company.entity";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(company);
  }

  async find(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.companyRepository.findOne({
      where: {
        id,
      },
    });
    if (!company) {
      throw new HttpException("Company not found", HttpStatus.NOT_FOUND);
    }
    return company;
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<Company> {
    const company = await this.companyRepository.findOne({
      where: {
        id,
      },
    });
    if (!company) {
      throw new HttpException("Company not found", HttpStatus.NOT_FOUND);
    }
    Object.assign(company, updateCompanyDto);
    return this.companyRepository.save(company);
  }

  async delete(id: string): Promise<void> {
    const result = await this.companyRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException("Company not found", HttpStatus.NOT_FOUND);
    }
  }
}
