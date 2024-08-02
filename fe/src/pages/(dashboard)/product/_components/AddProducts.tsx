import instance from '@/configs/axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Form, Input, Button, Checkbox, InputNumber, Select, FormProps, message, } from 'antd';
import TextArea from 'antd/es/input/TextArea';

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

const AddProducts = () => {
    const [messageAPI, contextHolder] = message.useMessage()
    const [form] = Form.useForm()
    const { data: categories } = useQuery({
        queryKey: ['CATEGORY'],
        queryFn: async () => {
            const { data } = await instance.get('/categories')
            return data
        }
    })
    const { mutate } = useMutation({
        mutationFn: async (product: FieldType) => {
            const { data } = await instance.post('/products', product)
            form.resetFields()
            return data
        },
        onSuccess: () => {
            messageAPI.open({
                type: 'success',
                content: 'Thêm sản phẩm thành công',
            })
        }
    })
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        mutate(values)
    };
    return (
        <>
            {contextHolder}
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 18 }}
                style={{ maxWidth: 1280 }}
                initialValues={{ remember: true }}
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
    )
}

export default AddProducts