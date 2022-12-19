import gql from 'graphql-tag'
export const createOneQuotes = gql`
mutation (
    data: {
    $account: String!,
    $approval_issues: String!,
    $approval_status: String!,
    $assigned_to: String!,
    $billing_city: String!,
    $billing_country: String!,
    $billing_postal: String!,
    $billing_state: String!,
    $billing_street: String!,
    $categories: String!,
    $contact: String!,
    $created_at: DateTime!,
    $currency: String!,
    $cust_id: Int!!,
    $customers: String!,
    $customers_customersToquotes: String!,
    $discount: String!,
    $grand_total: String!,
    $invoice_status: String!,
    $line_item_discount: String!,
    $line_item_group_total: String!,
    $line_item_name: String!,
    $line_item_subtotal: String!,
    $line_item_tax: String!,
    $line_item_total: String!,
    $name: String!!,
    $order_id: Int!!,
    $orders: String!,
    $payment_terms: String!,
    $prod_id: BigInt!!,
    $products_productsToquotes: String!,
    $quote_stage: String!,
    $shipping: String!,
    $shipping_city: String!,
    $shipping_country: String!,
    $shipping_postal: String!,
    $shipping_state: String!,
    $shipping_street: String!,
    $shipping_tax: String!,
    $subtotal: String!,
    $tax: String!,
    $total: String!,
    $valid_until: String!,
    }
  ) {
createOneQuotes (
    data: {
    account: $account,
    approval_issues: $approval_issues,
    approval_status: $approval_status,
    assigned_to: $assigned_to,
    billing_city: $billing_city,
    billing_country: $billing_country,
    billing_postal: $billing_postal,
    billing_state: $billing_state,
    billing_street: $billing_street,
    categories: $categories,
    contact: $contact,
    created_at: $created_at,
    currency: $currency,
    cust_id: $cust_id,
    customers: $customers,
    customers_customersToquotes: $customers_customersToquotes,
    discount: $discount,
    grand_total: $grand_total,
    invoice_status: $invoice_status,
    line_item_discount: $line_item_discount,
    line_item_group_total: $line_item_group_total,
    line_item_name: $line_item_name,
    line_item_subtotal: $line_item_subtotal,
    line_item_tax: $line_item_tax,
    line_item_total: $line_item_total,
    name: $name,
    order_id: $order_id,
    orders: $orders,
    payment_terms: $payment_terms,
    prod_id: $prod_id,
    products_productsToquotes: $products_productsToquotes,
    quote_stage: $quote_stage,
    shipping: $shipping,
    shipping_city: $shipping_city,
    shipping_country: $shipping_country,
    shipping_postal: $shipping_postal,
    shipping_state: $shipping_state,
    shipping_street: $shipping_street,
    shipping_tax: $shipping_tax,
    subtotal: $subtotal,
    tax: $tax,
    total: $total,
    valid_until: $valid_until,
    }
  ) } {
    account
    approval_issues
    approval_status
    assigned_to
    billing_city
    billing_country
    billing_postal
    billing_state
    billing_street
    categories
    contact
    created_at
    currency
    cust_id
    customers
    customers_customersToquotes
    discount
    grand_total
    id
    invoice_status
    line_item_discount
    line_item_group_total
    line_item_name
    line_item_subtotal
    line_item_tax
    line_item_total
    name
    order_id
    orders
    payment_terms
    prod_id
    products_productsToquotes
    quote_stage
    shipping
    shipping_city
    shipping_country
    shipping_postal
    shipping_state
    shipping_street
    shipping_tax
    subtotal
    tax
    total
    valid_until
  }`
