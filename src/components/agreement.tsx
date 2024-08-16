const contractAgreement = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>
        This Vendor Agreement ("Agreement") is made and entered into as of
        [Date], by and between [Your Company Name], located at [Your Company
        Address] ("Buyer"), and [Vendor Name], located at [Vendor Address]
        ("Vendor").
      </p>
      <p>
        3.2 Shipping and Handling: The cost of shipping and handling is
        [included/excluded] in the total amount. If excluded, the Buyer agrees
        to pay the shipping and handling fees separately.
      </p>
      <p>
        3.3 Risk of Loss: Risk of loss shall pass to the Buyer upon delivery of
        the Products to the delivery address.
      </p>

      <div>
        <p>
          <b> 4. Warranty</b>
        </p>
        <p>
          4.1 The Vendor warrants that the Products are new, genuine, and free
          from defects in material and workmanship for a period of [Warranty
          Period, e.g., 1 year] from the date of delivery.
        </p>
        <p>
          {" "}
          4.2 In the event of any defect, the Vendor agrees to repair or replace
          the defective Products at no additional cost to the Buyer.
        </p>
      </div>
      <p>
        <b> 5. Termination</b>
      </p>
      <p>
        {" "}
        5.1 Either party may terminate this Agreement with written notice if the
        other party fails to fulfill any material obligation under this
        Agreement and such failure is not cured within [Number of Days] days
        after written notice.
      </p>
      <p>
        <b>6. Governing Law</b>
      </p>
      <p>
        {" "}
        <p>
          This Agreement shall be governed by and construed in accordance with
          the laws of [Your Country/State].{" "}
        </p>
        <p>
          <b>7. Miscellaneous </b>
        </p>
        <p>
          7.1 Entire Agreement: This Agreement constitutes the entire
          understanding between the parties and supersedes all prior agreements,
          understandings, and negotiations.{" "}
        </p>
        <p>
          7.2 Amendments: Any amendments or modifications to this Agreement must
          be in writing and signed by both parties.{" "}
        </p>
        <p>
          7.3 Severability: If any provision of this agreement is held to be
          invalid or unenforceable, the remaining provisions shall remain in
          full force and effect.
        </p>
        <p>
          <b>8. Signatures </b>
        </p>
        <p>
          IN WITNESS WHEREOF, the parties hereto have executed this Agreement as
          of the date first above written.
        </p>
      </p>
    </div>
  );
};

export default contractAgreement;
