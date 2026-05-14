import LoanSelectedPanel from "./Step2LoanSelectedPanel";

const Step2RightPanel = ({ selectedItems, onRemove }) => (
  <div className="w-95 border-l border-gray-100 bg-gray-50/70 overflow-hidden flex flex-col min-h-0">

    <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">

      <LoanSelectedPanel
        selectedItems={selectedItems}
        onRemove={onRemove}
      />

    </div>

  </div>
);

export default Step2RightPanel;