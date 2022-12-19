import gql from 'graphql-tag'
export const upsertOneCustomers = gql`
mutation (
    create: {
    $Address: String!,
    $address_two: String!,
    $comments: String!,
    $confirmed_email: String!,
    $country: String!,
    $credit_memos: String!,
    $customer_group: String!,
    $customer_payment: String!,
    $customer_since: DateTime!,
    $date_of_birth: String!,
    $description: String!,
    $email: String!!,
    $emails: String!,
    $first_name: String!!,
    $gender: String!,
    $image: String!,
    $last_name: String!!,
    $mediamanager: String!,
    $messages: String!,
    $middle_name: String!,
    $name_prefix: String!,
    $name_suffix: String!,
    $newsletter_subscribers: String!,
    $orders: String!,
    $password: String!,
    $payment_type: String!,
    $phone: String!,
    $product: String!,
    $projects: String!,
    $quotes: String!,
    $returns: String!,
    $short_description: String!,
    $state: String!,
    $tax_vat_number: String!,
    $thumbnail: String!,
    $username: String!,
    $websites: String!,
    $workspaces: String!,
    $zipcode: String!,
    }
    update: {
    $Address: NullableStringFieldUpdateOperationsInput!,
    $address_two: NullableStringFieldUpdateOperationsInput!,
    $comments: NullableStringFieldUpdateOperationsInput!,
    $confirmed_email: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $credit_memos: NullableStringFieldUpdateOperationsInput!,
    $customer_group: NullableStringFieldUpdateOperationsInput!,
    $customer_payment: NullableStringFieldUpdateOperationsInput!,
    $customer_since: NullableDateTimeFieldUpdateOperationsInput!,
    $date_of_birth: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $email: StringFieldUpdateOperationsInput!,
    $emails: NullableStringFieldUpdateOperationsInput!,
    $first_name: StringFieldUpdateOperationsInput!,
    $gender: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $last_name: StringFieldUpdateOperationsInput!,
    $mediamanager: NullableStringFieldUpdateOperationsInput!,
    $messages: NullableStringFieldUpdateOperationsInput!,
    $middle_name: NullableStringFieldUpdateOperationsInput!,
    $name_prefix: NullableStringFieldUpdateOperationsInput!,
    $name_suffix: NullableStringFieldUpdateOperationsInput!,
    $newsletter_subscribers: NullableStringFieldUpdateOperationsInput!,
    $orders: NullableStringFieldUpdateOperationsInput!,
    $password: NullableStringFieldUpdateOperationsInput!,
    $payment_type: NullableStringFieldUpdateOperationsInput!,
    $phone: NullableStringFieldUpdateOperationsInput!,
    $product: NullableStringFieldUpdateOperationsInput!,
    $projects: NullableStringFieldUpdateOperationsInput!,
    $quotes: NullableStringFieldUpdateOperationsInput!,
    $returns: NullableStringFieldUpdateOperationsInput!,
    $short_description: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    $tax_vat_number: NullableStringFieldUpdateOperationsInput!,
    $thumbnail: NullableStringFieldUpdateOperationsInput!,
    $username: NullableStringFieldUpdateOperationsInput!,
    $websites: NullableStringFieldUpdateOperationsInput!,
    $workspaces: NullableStringFieldUpdateOperationsInput!,
    $zipcode: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneCustomers (
    create: {
    Address: $Address,
    address_two: $address_two,
    comments: $comments,
    confirmed_email: $confirmed_email,
    country: $country,
    credit_memos: $credit_memos,
    customer_group: $customer_group,
    customer_payment: $customer_payment,
    customer_since: $customer_since,
    date_of_birth: $date_of_birth,
    description: $description,
    email: $email,
    emails: $emails,
    first_name: $first_name,
    gender: $gender,
    image: $image,
    last_name: $last_name,
    mediamanager: $mediamanager,
    messages: $messages,
    middle_name: $middle_name,
    name_prefix: $name_prefix,
    name_suffix: $name_suffix,
    newsletter_subscribers: $newsletter_subscribers,
    orders: $orders,
    password: $password,
    payment_type: $payment_type,
    phone: $phone,
    product: $product,
    projects: $projects,
    quotes: $quotes,
    returns: $returns,
    short_description: $short_description,
    state: $state,
    tax_vat_number: $tax_vat_number,
    thumbnail: $thumbnail,
    username: $username,
    websites: $websites,
    workspaces: $workspaces,
    zipcode: $zipcode,
    }
    update: {
    Address: $Address,
    address_two: $address_two,
    comments: $comments,
    confirmed_email: $confirmed_email,
    country: $country,
    credit_memos: $credit_memos,
    customer_group: $customer_group,
    customer_payment: $customer_payment,
    customer_since: $customer_since,
    date_of_birth: $date_of_birth,
    description: $description,
    email: $email,
    emails: $emails,
    first_name: $first_name,
    gender: $gender,
    image: $image,
    last_name: $last_name,
    mediamanager: $mediamanager,
    messages: $messages,
    middle_name: $middle_name,
    name_prefix: $name_prefix,
    name_suffix: $name_suffix,
    newsletter_subscribers: $newsletter_subscribers,
    orders: $orders,
    password: $password,
    payment_type: $payment_type,
    phone: $phone,
    product: $product,
    projects: $projects,
    quotes: $quotes,
    returns: $returns,
    short_description: $short_description,
    state: $state,
    tax_vat_number: $tax_vat_number,
    thumbnail: $thumbnail,
    username: $username,
    websites: $websites,
    workspaces: $workspaces,
    zipcode: $zipcode,
    }
    where: {
    id: $id,
    }
  ) } {
    Address
    address_two
    comments
    confirmed_email
    country
    credit_memos
    customer_group
    customer_payment
    customer_since
    date_of_birth
    description
    email
    emails
    first_name
    gender
    id
    image
    last_name
    mediamanager
    messages
    middle_name
    name_prefix
    name_suffix
    newsletter_subscribers
    orders
    password
    payment_type
    phone
    product
    projects
    quotes
    returns
    short_description
    state
    tax_vat_number
    thumbnail
    username
    websites
    workspaces
    zipcode
  }`
