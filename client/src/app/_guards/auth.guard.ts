import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';

export function AuthGuard(): CanActivateFn {
  return (): Observable<boolean> => {
    const accountService: AccountService = inject(AccountService);
    const toastr: ToastrService = inject(ToastrService);
    return accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        else {
          toastr.error('Access Denied.');
          return false
        }
      })
    )
  }
};
