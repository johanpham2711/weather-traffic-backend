import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async setExpire(key: string, data: string | Buffer | number, expireTime = 60): Promise<'OK'> {
    return this.redis.set(key, data, 'EX', expireTime);
  }

  async get(key: string): Promise<string> {
    return this.redis.get(key);
  }

  async hset(key: string, fields: string, value: string | number): Promise<number> {
    return this.redis.hset(key, fields, value);
  }

  async hget(key: string, fields: string): Promise<string> {
    return this.redis.hget(key, fields);
  }

  async hgetall(key: string): Promise<Record<string, string>> {
    return this.redis.hgetall(key);
  }

  async expire(key: string, expireTime: number): Promise<number> {
    return this.redis.expire(key, expireTime);
  }

  async delete(key: string): Promise<number> {
    return this.redis.del(key);
  }

  async ttl(key: string): Promise<number> {
    return this.redis.ttl(key);
  }

  async incr(key: string): Promise<number> {
    return this.redis.incr(key);
  }

  async del(key: string): Promise<number> {
    return this.redis.del(key);
  }
}
