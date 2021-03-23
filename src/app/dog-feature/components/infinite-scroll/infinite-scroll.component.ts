import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { fetchDogs } from '../../store/dog.actions';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css'],
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<{ dogState: AppState }>) {}

  @ViewChild('scrollAnchor') scrollAnchor;
  private _intersectionObserver: IntersectionObserver;
  private _observerOptions: {
    root: HTMLElement;
    rootMargin: string;
    threshold: number;
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this._observerOptions = { root: null, rootMargin: '0px', threshold: 0 };
    this._intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        console.log({ entries, observer });
        this._store.dispatch(fetchDogs());
      },

      this._observerOptions
    );

    this._intersectionObserver.observe(this.scrollAnchor.nativeElement);
  }

  ngOnDestroy(): void {
    this._intersectionObserver.unobserve(this.scrollAnchor.nativeElement);
  }
}
