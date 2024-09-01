import { Injectable } from '@angular/core';
import { BaseStyle } from 'primeng/base';

const theme = ({ dt }) => `
.p-datatable {
    position: relative;
}

.p-datatable-table {
    border-spacing: 0;
    width: 100%;
}

.p-datatable-scrollable > .p-datatable-table-container {
    position: relative;
}
/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-thead {
    top: 0;
    z-index: 2;
}
/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 2;
}
/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-frozen-tbody:last-child {
    z-index: 1;
}

.p-datatable-scrollable-table > .p-datatable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-datatable-scrollable .p-datatable-frozen-column {
    position: sticky;
    background: ${dt('datatable.header.cell.background')};
}

.p-datatable-scrollable th.p-datatable-frozen-column {
    z-index: 1;
}

.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,
.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
    background: ${dt('datatable.header.cell.background')};
}

.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,
.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background: ${dt('datatable.footer.cell.background')};
}

.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-datatable-flex-scrollable > .p-datatable-table-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {
    position: sticky;
    z-index: 1;
}

.p-datatable-resizable-table > .p-datatable-thead > tr > th,
.p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
.p-datatable-resizable-table > .p-datatable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}

.p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {
    display: none;
}

.p-datatable-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: ${dt('datatable.column.resizer.width')};
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

/*
.p-datatable-column-header-content {
    display: flex;
    align-items: center;
    gap: ${dt('datatable.header.cell.gap')};
}
.p-datatable-thead > tr > th {
    display: flex;
    align-items: center;
    gap: ${dt('datatable.header.cell.gap')};
}
*/

.p-datatable-column-resize-indicator {
    width: ${dt('datatable.resize.indicator.width')};
    position: absolute;
    z-index: 10;
    display: none;
    background: ${dt('datatable.resize.indicator.color')};
}

.p-datatable-row-reorder-indicator-up,
.p-datatable-row-reorder-indicator-down {
    position: absolute;
    display: none;
}

.p-datatable-reorderable-column,
.p-datatable-reorderable-row-handle {
    cursor: move;
}

.p-datatable-mask {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
}

.p-datatable-inline-filter {
    display: flex;
    align-items: center;
    width: 100%;
    gap: ${dt('datatable.filter.inline.gap')};
}

.p-datatable-inline-filter .p-datatable-filter-element-container {
    flex: 1 1 auto;
    width: 1%;
}

.p-datatable-filter-overlay {
    position: absolute;
    background: ${dt('datatable.filter.overlay.select.background')};
    color: ${dt('datatable.filter.overlay.select.color')};
    border: 1px solid ${dt('datatable.filter.overlay.select.border.color')};
    border-radius: ${dt('datatable.filter.overlay.select.border.radius')};
    box-shadow: ${dt('datatable.filter.overlay.select.shadow')};
    min-width: 12.5rem;
}

.p-datatable-filter-constraint-list {
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: ${dt('datatable.filter.constraint.list.padding')};
    gap: ${dt('datatable.filter.constraint.list.gap')};
}

.p-datatable-filter-constraint {
    padding: ${dt('datatable.filter.constraint.padding')};
    color: ${dt('datatable.filter.constraint.color')};
    border-radius: ${dt('datatable.filter.constraint.border.radius')};
    cursor: pointer;
    transition: background ${dt('datatable.transition.duration')}, color ${dt(
        'datatable.transition.duration',
    )}, border-color ${dt('datatable.transition.duration')},
        box-shadow ${dt('datatable.transition.duration')};
}

.p-datatable-filter-constraint-selected {
    background: ${dt('datatable.filter.constraint.selected.background')};
    color: ${dt('datatable.filter.constraint.selected.color')};
}

.p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {
    background: ${dt('datatable.filter.constraint.focus.background')};
    color: ${dt('datatable.filter.constraint.focus.color')};
}

.p-datatable-filter-constraint:focus-visible {
    outline: 0 none;
    background: ${dt('datatable.filter.constraint.focus.background')};
    color: ${dt('datatable.filter.constraint.focus.color')};
}

.p-datatable-filter-constraint-selected:focus-visible {
    outline: 0 none;
    background: ${dt('datatable.filter.constraint.selected.focus.background')};
    color: ${dt('datatable.filter.constraint.selected.focus.color')};
}

.p-datatable-filter-constraint-separator {
    border-top: 1px solid ${dt('datatable.filter.constraint.separator.border.color')};
}

.p-datatable-popover-filter {
    display: inline-flex;
    margin-left: auto;
}

.p-datatable-filter-overlay-popover {
    background: ${dt('datatable.filter.overlay.popover.background')};
    color: ${dt('datatable.filter.overlay.popover.color')};
    border: 1px solid ${dt('datatable.filter.overlay.popover.border.color')};
    border-radius: ${dt('datatable.filter.overlay.popover.border.radius')};
    box-shadow: ${dt('datatable.filter.overlay.popover.shadow')};
    min-width: 12.5rem;
    padding: ${dt('datatable.filter.overlay.popover.padding')};
    display: flex;
    flex-direction: column;
    gap: ${dt('datatable.filter.overlay.popover.gap')};
}

.p-datatable-filter-operator-dropdown, .p-datatable-filter-constraint-dropdown {
    width: 100%;
}

.p-datatable-filter-rule-list,
.p-datatable-filter-rule {
    display: flex;
    flex-direction: column;
    gap: ${dt('datatable.filter.overlay.popover.gap')};
}

.p-datatable-filter-rule {
    border-bottom: 1px solid ${dt('datatable.filter.rule.border.color')};
}

.p-datatable-filter-rule:last-child {
    border-bottom: 0 none;
}

.p-datatable-filter-add-rule-button, .p-datatable-filter-remove-rule-button {
    width: 100%;
}

.p-datatable-filter-remove-button {
    width: 100%;
}

.p-datatable-filter-buttonbar {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-datatable-virtualscroller-spacer {
    display: flex;
}

.p-datatable .p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    left: 0;
}

.p-datatable-paginator-top {
    border-color: ${dt('datatable.paginator.top.border.color')};
    border-style: solid;
    border-width: ${dt('datatable.paginator.top.border.width')};
}

.p-datatable-paginator-bottom {
    border-color: ${dt('datatable.paginator.bottom.border.color')};
    border-style: solid;
    border-width: ${dt('datatable.paginator.bottom.border.width')};
}

.p-datatable-header {
    background: ${dt('datatable.header.background')};
    color: ${dt('datatable.header.color')};
    border-color: ${dt('datatable.header.border.color')};
    border-style: solid;
    border-width: ${dt('datatable.header.border.width')};
    padding: ${dt('datatable.header.padding')};
}

.p-datatable-footer {
    background: ${dt('datatable.footer.background')};
    color: ${dt('datatable.footer.color')};
    border-color: ${dt('datatable.footer.border.color')};
    border-style: solid;
    border-width: ${dt('datatable.footer.border.width')};
    padding: ${dt('datatable.footer.padding')};
}

.p-datatable-thead > tr > th {
    padding: ${dt('datatable.header.cell.padding')};
    background: ${dt('datatable.header.cell.background')};
    border-color: ${dt('datatable.header.cell.border.color')};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${dt('datatable.header.cell.color')};
    font-weight: ${dt('datatable.column.title.font.weight')};
    text-align: left;
    transition: background ${dt('datatable.transition.duration')}, color ${dt(
        'datatable.transition.duration',
    )}, border-color ${dt('datatable.transition.duration')},
            outline-color ${dt('datatable.transition.duration')}, box-shadow ${dt('datatable.transition.duration')};
}

/*
.p-datatable-column-title {
    font-weight: ${dt('datatable.column.title.font.weight')};
}
*/

.p-datatable-tbody > tr {
    outline-color: transparent;
    background: ${dt('datatable.row.background')};
    color: ${dt('datatable.row.color')};
    transition: background ${dt('datatable.transition.duration')}, color ${dt(
        'datatable.transition.duration',
    )}, border-color ${dt('datatable.transition.duration')},
            outline-color ${dt('datatable.transition.duration')}, box-shadow ${dt('datatable.transition.duration')};
}

.p-datatable-tbody > tr > td {
    text-align: left;
    border-color: ${dt('datatable.body.cell.border.color')};
    border-style: solid;
    border-width: 0 0 1px 0;
    padding: ${dt('datatable.body.cell.padding')};
}

.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
    background: ${dt('datatable.row.hover.background')};
    color: ${dt('datatable.row.hover.color')};
}

.p-datatable-tbody > tr.p-datatable-row-selected {
    background: ${dt('datatable.row.selected.background')};
    color: ${dt('datatable.row.selected.color')};
}

.p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {
    border-bottom-color: ${dt('datatable.body.cell.selected.border.color')};
}

.p-datatable-tbody > tr.p-datatable-row-selected > td {
    border-bottom-color: ${dt('datatable.body.cell.selected.border.color')};
}

.p-datatable-tbody > tr:focus-visible,
.p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {
    box-shadow: ${dt('datatable.body.cell.focus.ring.shadow')};
    outline: ${dt('datatable.body.cell.focus.ring.width')} ${dt('datatable.body.cell.focus.ring.style')} ${dt(
        'datatable.body.cell.focus.ring.color',
    )};
    outline-offset: ${dt('datatable.body.cell.focus.ring.offset')};
}

.p-datatable-tfoot > tr > td {
    text-align: left;
    padding: ${dt('datatable.footer.cell.padding')};
    border-color: ${dt('datatable.footer.cell.border.color')};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${dt('datatable.footer.cell.color')};
    background: ${dt('datatable.footer.cell.background')};
}

.p-datatable-column-footer {
    font-weight: ${dt('datatable.column.footer.font.weight')};
}

.p-datatable-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-datatable-thead > tr > th,
.p-datatable-sort-icon,
.p-datatable-sort-badge {
    vertical-align: middle;
}

.p-datatable-sort-icon {
    color: ${dt('datatable.sort.icon.color')};
    transition: color ${dt('datatable.transition.duration')};
}

.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
    background: ${dt('datatable.header.cell.hover.background')};
    color: ${dt('datatable.header.cell.hover.color')};
}

.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {
    color: ${dt('datatable.sort.icon.hover.color')};
}

.p-datatable-thead > tr > th.p-datatable-column-sorted {
    background: ${dt('datatable.header.cell.selected.background')};
    color: ${dt('datatable.header.cell.selected.color')};
}

.p-datatable-thead > tr > th.p-datatable-column-sorted .p-datatable-sort-icon {
    color: ${dt('datatable.header.cell.selected.color')};
}

.p-datatable-sortable-column:focus-visible {
    box-shadow: ${dt('datatable.header.cell.focus.ring.shadow')};
    outline: ${dt('datatable.header.cell.focus.ring.width')} ${dt('datatable.header.cell.focus.ring.style')} ${dt(
        'datatable.header.cell.focus.ring.color',
    )};
    outline-offset: ${dt('datatable.header.cell.focus.ring.offset')};
}

.p-datatable-hoverable .p-datatable-selectable-row {
    cursor: pointer;
}

.p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 ${dt('datatable.drop.point.color')};
}

.p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 ${dt('datatable.drop.point.color')};
}

.p-datatable-loading-icon {
    font-size: ${dt('datatable.loading.icon.size')};
    width: ${dt('datatable.loading.icon.size')};
    height: ${dt('datatable.loading.icon.size')};
}

.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
}

.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
}

.p-datatable-gridlines .p-datatable-paginator-top {
    border-width: 1px 1px 0 1px;
}

.p-datatable-gridlines .p-datatable-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-datatable-gridlines .p-datatable-thead > tr > th {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
    border-width: 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr > td {
    border-width: 1px 0 0 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
}

p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
}

.p-datatable-gridlines .p-datatable-tfoot > tr > td {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd) {
    background: ${dt('datatable.row.striped.background')};
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd).p-datatable-row-selected {
    background: ${dt('datatable.row.selected.background')};
    color: ${dt('datatable.row.selected.color')};
}

.p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-lg .p-datatable-header {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 0.9375rem 1.25rem;
}

.p-datatable-row-toggle-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${dt('datatable.row.toggle.button.size')};
    height: ${dt('datatable.row.toggle.button.size')};
    color: ${dt('datatable.row.toggle.button.color')};
    border: 0 none;
    background: transparent;
    cursor: pointer;
    border-radius: ${dt('datatable.row.toggle.button.border.radius')};
    transition: background ${dt('datatable.transition.duration')}, color ${dt(
        'datatable.transition.duration',
    )}, border-color ${dt('datatable.transition.duration')},
            outline-color ${dt('datatable.transition.duration')}, box-shadow ${dt('datatable.transition.duration')};
    outline-color: transparent;
    user-select: none;
}

.p-datatable-row-toggle-button:enabled:hover {
    color: ${dt('datatable.row.toggle.button.hover.color')};
    background: ${dt('datatable.row.toggle.button.hover.background')};
}

.p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {
    background: ${dt('datatable.row.toggle.button.selected.hover.background')};
    ${dt('datatable.row.toggle.button.selected.hover.color')};
}

.p-datatable-row-toggle-button:focus-visible {
    box-shadow: ${dt('datatable.row.toggle.button.focus.ring.shadow')};
    outline: ${dt('datatable.row.toggle.button.focus.ring.width')} ${dt(
        'datatable.row.toggle.button.focus.ring.style',
    )} ${dt('datatable.row.toggle.button.focus.ring.color')};
    outline-offset: ${dt('datatable.row.toggle.button.focus.ring.offset')};
}

  .p-overlay-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
  }
    
 .p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
  }

  .p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
  }

  @keyframes p-overlay-mask-enter-animation {
    from {
      background-color: transparent;
    }
    to {
      background-color: var(--maskbg);
    }
  }
  @keyframes p-overlay-mask-leave-animation {
    from {
      background-color: var(--maskbg);
    }
    to {
      background-color: transparent;
    }
  }
`;

const classes = {
    root: ({ instance }) => ({
        'p-datatable p-component': true,
        'p-datatable-hoverable': instance.rowHover || instance.selectionMode,
        'p-datatable-resizable': instance.resizableColumns,
        'p-datatable-resizable-fit': instance.resizableColumns && instance.columnResizeMode === 'fit',
        'p-datatable-scrollable': instance.scrollable,
        'p-datatable-flex-scrollable': instance.scrollable && instance.scrollHeight === 'flex',
        'p-datatable-striped': instance.stripedRows,
        'p-datatable-gridlines': instance.showGridlines,
        'p-datatable-sm': instance.size === 'small',
        'p-datatable-lg': instance.size === 'large',
    }),
    mask: 'p-datatable-mask p-overlay-mask',
    loadingIcon: 'p-datatable-loading-icon',
    header: 'p-datatable-header',
    pcPaginator: ({ instance }) => 'p-datatable-paginator-' + instance.paginatorPosition,
    tableContainer: 'p-datatable-table-container',
    table: ({ instance }) => ({
        'p-datatable-table': true,
        'p-datatable-scrollable-table': instance.scrollable,
        'p-datatable-resizable-table': instance.resizableColumns,
        'p-datatable-resizable-table-fit': instance.resizableColumns && instance.columnResizeMode === 'fit',
    }),
    thead: 'p-datatable-thead',
    columnResizer: 'p-datatable-column-resizer',
    columnHeaderContent: 'p-datatable-column-header-content',
    columnTitle: 'p-datatable-column-title',
    columnFooter: 'p-datatable-column-footer',
    sortIcon: 'p-datatable-sort-icon',
    pcSortBadge: 'p-datatable-sort-badge',
    filter: ({ instance }) => ({
        'p-datatable-filter': true,
        'p-datatable-inline-filter': instance.display === 'row',
        'p-datatable-popover-filter': instance.display === 'menu',
    }),
    filterElementContainer: 'p-datatable-filter-element-container',
    pcColumnFilterButton: 'p-datatable-column-filter-button',
    pcColumnFilterClearButton: 'p-datatable-column-filter-clear-button',
    filterOverlay: ({ instance }) => ({
        'p-datatable-filter-overlay p-component': true,
        'p-datatable-filter-overlay-popover': instance.display === 'menu',
    }),
    filterConstraintList: 'p-datatable-filter-constraint-list',
    filterConstraint: 'p-datatable-filter-constraint',
    filterConstraintSeparator: 'p-datatable-filter-constraint-separator',
    filterOperator: 'p-datatable-filter-operator',
    pcFilterOperatorDropdown: 'p-datatable-filter-operator-dropdown',
    filterRuleList: 'p-datatable-filter-rule-list',
    filterRule: 'p-datatable-filter-rule',
    pcFilterConstraintDropdown: 'p-datatable-filter-constraint-dropdown',
    pcFilterRemoveRuleButton: 'p-datatable-filter-remove-rule-button',
    pcFilterAddRuleButton: 'p-datatable-filter-add-rule-button',
    filterButtonbar: 'p-datatable-filter-buttonbar',
    pcFilterClearButton: 'p-datatable-filter-clear-button',
    pcFilterApplyButton: 'p-datatable-filter-apply-button',
    tbody: ({ instance }) => ({
        'p-datatable-tbody': true,
        'p-datatable-frozen-tbody': instance.frozenValue || instance.frozenBodyTemplate,
        'p-virtualscroller-content': instance.virtualScroll,
    }),
    rowGroupHeader: 'p-datatable-row-group-header',
    rowToggleButton: 'p-datatable-row-toggle-button',
    rowToggleIcon: 'p-datatable-row-toggle-icon',

    rowExpansion: 'p-datatable-row-expansion',
    rowGroupFooter: 'p-datatable-row-group-footer',
    emptyMessage: 'p-datatable-empty-message',
    bodyCell: ({ instance }) => ({
        'p-datatable-frozen-column': instance.columnProp('frozen'),
    }),
    reorderableRowHandle: 'p-datatable-reorderable-row-handle',
    pcRowEditorInit: 'p-datatable-row-editor-init',
    pcRowEditorSave: 'p-datatable-row-editor-save',
    pcRowEditorCancel: 'p-datatable-row-editor-cancel',
    tfoot: 'p-datatable-tfoot',
    footerCell: ({ instance }) => ({
        'p-datatable-frozen-column': instance.columnProp('frozen'),
    }),
    virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
    footer: 'p-datatable-tfoot',
    columnResizeIndicator: 'p-datatable-column-resize-indicator',
    rowReorderIndicatorUp: 'p-datatable-row-reorder-indicator-up',
    rowReorderIndicatorDown: 'p-datatable-row-reorder-indicator-down',
};

const inlineStyles = {
    tableContainer: ({ instance }) => ({
        'max-height': instance.virtualScroll ? '' : instance.scrollHeight,
        overflow: 'auto',
    }),
    thead: { position: 'sticky' },
    tfoot: { position: 'sticky' },
};
@Injectable()
export class DataTableStyle extends BaseStyle {
    name = 'datatable';

    theme = theme;

    classes = classes;

    inlineStyles = inlineStyles;
}
