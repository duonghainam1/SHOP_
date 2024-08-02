import { Button, Checkbox, FormProps, Input, InputNumber, message } from "antd";

import { Link, useParams } from "react-router-dom";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "@/configs/axios";

type FieldType = {
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
const UpdateProducts = () => {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const queryClient = useQueryClient();
    const { data: categories } = useQuery({
        queryKey: ['CATEGORY'],
        queryFn: async () => {
            const { data } = await instance.get('/categories')
            return data
        }
    })
    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => instance.get(`/products/${id}`),
    });
    const { mutate } = useMutation({
        mutationFn: async (formData: FieldType) => {
            try {
                return await instance.put(`/products/${id}`, formData);
            } catch (error) {
                throw new Error((error as any).message);
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Cập nhật sản phẩm thành công!",
            });
            queryClient.invalidateQueries({
                queryKey: ["product"],
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        mutate(values);
    };
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            {contextHolder}
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 18 }}
                style={{ maxWidth: 1280 }}
                initialValues={{ ...data?.data }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                className=''
            >
                <div className="grid grid-cols-[auto,400px] ">

                    <div className='w-full'>
                        <Form.Item<FieldType>
                            label="Tên sản phẩm"
                            name="name"
                            rules={[{ required: true, message: 'Bắt buộc phải nhập' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Giá sản phẩm"
                            name="price"
                            rules={[{ required: true, message: 'Bắt buộc phải nhập' }]}
                        >
                            <InputNumber addonAfter={'$'} defaultValue={0} />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Giam giá"
                            name="discount"
                            rules={[({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || value < getFieldValue('price')) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Không thể giảm giá cao hơn giá sản phẩm'));
                                }
                            })]}
                        >
                            <InputNumber addonAfter={`$`} defaultValue={0} />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Số lượng trong kho"
                            name="countInStock"

                        >
                            <InputNumber addonAfter={`$`} defaultValue={0} />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Mô tả sản phẩm"
                            name="description"
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </div>
                    <div>

                        <Form.Item<FieldType>
                            label="Ảnh sản phẩm"
                            name="image"

                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Danh mục"
                            name="category"

                        >

                            <Checkbox.Group>
                                {categories?.map((category: any) => (
                                    <Checkbox key={category?._id} value={category?._id}>
                                        {category?.name}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
                        </Form.Item>
                        {/* <Form.Item<FieldType>
                            label="Gallery"
                            name="gallery"
                        >
                            <Input />
                        </Form.Item> */}
                        {/* <Form.Item<FieldType>
                            label="Thuộc tính"
                            name="attributes"
                        >
                            <Input />
                        </Form.Item> */}
                        <Form.Item<FieldType>
                            label="Nổi bật"
                            name="featured"
                            valuePropName="checked"
                        >
                            <Checkbox />
                        </Form.Item>

                    </div>

                </div >
                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default UpdateProducts;

// npm uninstall @ant-design/cssinjs