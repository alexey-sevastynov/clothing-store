'use client';
import { createDomain } from 'effector';

const modals = createDomain();

//Menu
export const openMenu = modals.createEvent();
export const closeMenu = modals.createEvent();
//Catalog
export const openCatalogMenu = modals.createEvent();
export const closeCatalogMenu = modals.createEvent();
//Search
export const openSearchModal = modals.createEvent();
export const closeSearchModal = modals.createEvent();

//Menu
export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false);

//Catalog
export const $catalogMenuIsOpen = modals
  .createStore(false)
  .on(openCatalogMenu, () => true)
  .on(closeCatalogMenu, () => false);

//Search
export const $searchModal = modals
  .createStore(false)
  .on(openSearchModal, () => true)
  .on(closeSearchModal, () => false);
