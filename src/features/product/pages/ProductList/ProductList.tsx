import { AntdOrderDirection, OrderDirection } from "@common/constants";
import { ISorter } from "@common/interfaces";
import { OrderBy } from "@features/product/constants";
import { IProduct } from "@features/product/interfaces";
import {
  productListStateSelector,
  setGetListQuery,
  setProductList,
} from "@features/product/reducers/product.reducer";
import { useAppDispatch, useAppSelector } from "@plugins/redux-toolkit/hooks";
import { Space, Table } from "antd";
import { ColumnsType, TableProps } from "antd/lib/table";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function ProductList() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { productList, getListQuery } = useAppSelector(
    productListStateSelector
  );
  console.log(productList);

  // const fetchData = () => {
  //   dispatch(fetchProductList({}));
  // };

  useEffect(() => {
    dispatch(
      setProductList([
        {
          id: "1",
          name: "John Brown",
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          id: "2",
          name: "Jim Green",
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          id: "3",
          name: "Joe Black",
          address: "Sydney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
      ])
    );
  }, []);

  const onChange: TableProps<IProduct>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    const { field, order, columnKey } = sorter as ISorter;
    const _field = field || columnKey;
    dispatch(
      setGetListQuery({
        ...getListQuery,
        orderBy: order ? _field || OrderBy.ID : OrderBy.ID,
        orderDirection:
          order === AntdOrderDirection.ASC
            ? OrderDirection.ASC
            : OrderDirection.DESC,
      })
    );
  };

  const columns: ColumnsType<IProduct> = [
    {
      title: t("product.list.table.column.name"),
      dataIndex: "name",
      key: "name",
      sorter: true,
      render: (text) => <a>{text}</a>,
    },
    {
      title: t("product.list.table.column.address"),
      dataIndex: "address",
      sorter: true,
      key: "address",
    },
    {
      title: t("product.list.table.column.action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={productList} onChange={onChange} />
  );
}
