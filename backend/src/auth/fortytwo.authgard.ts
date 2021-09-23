import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Strategy } from 'passport-42';

@Injectable()
export class FortyTwoOauthGuard extends AuthGuard(Strategy) {}