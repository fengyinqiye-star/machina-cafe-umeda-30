import { shopInfo } from '@/data/shop-info';

export default function ShopInfoCard() {
  const infoItems = [
    { label: '店名', value: `${shopInfo.name}（${shopInfo.nameJa}）` },
    { label: '住所', value: `〒${shopInfo.postalCode} ${shopInfo.address}` },
    {
      label: '電話番号',
      value: shopInfo.phone,
      href: `tel:${shopInfo.phone.replace(/-/g, '')}`,
    },
    { label: '営業時間', value: shopInfo.hours },
    { label: '定休日', value: shopInfo.closedDay },
    { label: 'テイクアウト', value: shopInfo.takeout },
    { label: '駐車場', value: shopInfo.parking },
  ];

  return (
    <div className="bg-card rounded-lg shadow-sm overflow-hidden">
      <div className="divide-y divide-border">
        {infoItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col sm:flex-row px-6 py-4"
          >
            <dt className="text-sm font-semibold text-foreground sm:w-32 shrink-0 mb-1 sm:mb-0">
              {item.label}
            </dt>
            <dd className="text-sm text-muted">
              {item.href ? (
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors underline"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
