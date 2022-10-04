import React from "react";
import TestRenderer from "react-test-renderer";
import DocumentCard from "../components/DocumentCard";

test("DocumentCard", () => {
    const tree = TestRenderer.create(<DocumentCard />).toJSON();
    expect(tree).toMatchSnapshot();
});
