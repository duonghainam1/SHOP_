
import instance from "@/configs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Table, TableColumnsType } from "antd";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
interface DataType {
    name: string;
    price: string;
    image: string;
    category: string
    // gallery: string[]
    description: string
    discount: number
    featured: boolean
    countInStock: number
    // attributes: string[]

}






const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
const ProductList = () => {
    const [messageAPI, contextHolder] = message.useMessage()
    const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const queryClient = useQueryClient()
    const { data: categories } = useQuery({
        queryKey: ['CATEGORY'],
        queryFn: async () => {
            const { data } = await instance.get('/categories')
            return data
        }
    })
    const { data } = useQuery({
        queryKey: ['PRODUCTS'],
        queryFn: async () => {
            const { data } = await instance.get('/products')
            return data
        }
    })
    const { mutate } = useMutation({
        mutationFn: async (id: string) => {
            const { data } = await instance.delete(`/products/${id}`)
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['PRODUCTS']
            })
            messageAPI.open({
                type: 'success',
                content: 'Xóa sản phẩm thành công',
            })
        }
    })


    const categoriesMap = new Map(categories?.map((category: any) => [category._id, category.name]));
    const datas = data?.data?.map((product: any) => ({
        key: product._id,
        ...product,
        category: categoriesMap.get(product.category)
    }))

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Ảnh',
            dataIndex: 'image',
            render: (_: any, product: any) => (
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
            )
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
        },
        {
            title: 'Giá sản phẩm',
            dataIndex: 'price',
        },
        {
            title: 'Danh mục',
            dataIndex: 'category',
            render: (_: any, product: any) => (
                <span>{product?.category}</span>
            )
        },
        {
            title: 'Số lượng',
            dataIndex: 'countInStock',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'featured',
            render: (featured) => (
                <span>{featured ? 'Có' : 'Không'}</span>
            )
        },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            render: (_: any, product: any) => (
                <div className="flex justify-center space-x-2">
                    <Link to={`/admin/products/${product._id}/edit`}>
                        <EditOutlined />
                    </Link>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => mutate(product._id)}
                        // onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined />
                    </Popconfirm>
                </div>
            )
        },
    ];
    return (
        <>

            {contextHolder}
            <div className="flex justify-between items-center py-3">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Quản lý sản phẩm
                    </h2>
                </div>
                <div>
                    <Link
                        to="/admin/products/add"
                        className="flex items-center"
                    >
                        <Button>
                            <Plus />
                            Add Product
                        </Button>
                    </Link>
                </div>
            </div>
            <hr />
            <div className="my-5">
                <div className="w-full">
                    <div>
                        <Table
                            rowSelection={{
                                type: selectionType,
                                ...rowSelection,
                            }}
                            columns={columns}
                            dataSource={datas}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;
