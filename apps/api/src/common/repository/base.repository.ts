import { PaginationParams, PaginatedResult } from '../interfaces/pagination.interface';

export abstract class BaseRepository<T, CreateDto = any, UpdateDto = any> {
  abstract findById(id: string): Promise<T | null>;
  abstract findMany(params?: PaginationParams & Record<string, any>): Promise<T[]>;
  abstract create(data: CreateDto): Promise<T>;
  abstract update(id: string, data: UpdateDto): Promise<T>;
  abstract delete(id: string): Promise<boolean>;
  abstract count(where?: Record<string, any>): Promise<number>;

  protected paginate(items: T[], total: number, page = 1, limit = 20): PaginatedResult<T> {
    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };
  }
}
