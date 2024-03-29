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
//Quick Modal for card item
export const openQuickModal = modals.createEvent();
export const closeQuickModal = modals.createEvent();
//Size table
export const openSizeTable = modals.createEvent();
export const closeSizeTable = modals.createEvent();

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

//Quick Modal for card item
export const $quickModal = modals
  .createStore(false)
  .on(openQuickModal, () => true)
  .on(closeQuickModal, () => false);

//Size table
export const $sizeTable = modals
  .createStore(false)
  .on(openSizeTable, () => true)
  .on(closeSizeTable, () => false);
