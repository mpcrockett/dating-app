import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditsComponent } from '../members/member-edits/member-edits.component';


export function PreventUsavedGuard(component: MemberEditsComponent): boolean {
  if (component.editForm?.dirty === true) {
    return confirm('Are you sure you want to continue? Any unsaved changes will be lost.');
  }
  return true;
}

@Injectable()
export class MemberEditGuard implements CanDeactivate<MemberEditsComponent> {
  canDeactivate(component: MemberEditsComponent): boolean {
    return PreventUsavedGuard(component);
  }
}